create extension if not exists "uuid-ossp";

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  nama text not null,
  role text check (role in ('Bintang','Pejuang')) default 'Pejuang',
  email text,
  universitas text,
  lokasi text,
  foto text,
  ktm text,
  status text default 'active',
  created_at timestamptz default now()
);

create table if not exists public.devices (
  id uuid primary key default uuid_generate_v4(),
  owner uuid references public.profiles(id) on delete set null,
  nama text not null,
  kategori text,
  foto text,
  spesifikasi text,
  minus text,
  status text default 'tersedia' check (status in ('tersedia','dipinjam','maintenance')),
  harga integer default 0,
  gratis boolean default false,
  lokasi text,
  created_at timestamptz default now()
);

create table if not exists public.dreams (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.profiles(id) on delete cascade,
  judul_mimpi text not null,
  deskripsi text,
  target date,
  status text default 'sedang_berjuang' check (status in ('sedang_berjuang','bertumbuh','berhasil')),
  created_at timestamptz default now()
);

create table if not exists public.applications (
  id uuid primary key default uuid_generate_v4(),
  device_id uuid references public.devices(id) on delete cascade,
  borrower uuid references public.profiles(id) on delete cascade,
  status text default 'pending' check (status in ('pending','approved','rejected')),
  created_at timestamptz default now()
);

create table if not exists public.stories (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references public.profiles(id) on delete set null,
  judul text not null,
  cerita text,
  foto text,
  achievement text,
  created_at timestamptz default now()
);

alter table public.profiles enable row level security;
alter table public.devices enable row level security;
alter table public.dreams enable row level security;
alter table public.applications enable row level security;
alter table public.stories enable row level security;

create policy "profiles_select_all" on public.profiles for select using (true);
create policy "profiles_insert_own" on public.profiles for insert with check (auth.uid() = id);
create policy "profiles_update_own" on public.profiles for update using (auth.uid() = id);

create policy "devices_select_all" on public.devices for select using (true);
create policy "devices_insert_owner" on public.devices for insert with check (auth.uid() = owner);
create policy "devices_update_owner" on public.devices for update using (auth.uid() = owner);

create policy "dreams_crud_own" on public.dreams for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "applications_select_borrower_or_owner" on public.applications
for select using (
  auth.uid() = borrower OR
  exists (select 1 from public.devices d where d.id = device_id and d.owner = auth.uid())
);
create policy "applications_insert_borrower" on public.applications for insert with check (auth.uid() = borrower);
create policy "applications_update_owner_or_borrower" on public.applications
for update using (
  auth.uid() = borrower OR
  exists (select 1 from public.devices d where d.id = device_id and d.owner = auth.uid())
);

create policy "stories_select_all" on public.stories for select using (true);
create policy "stories_insert_own" on public.stories for insert with check (auth.uid() = user_id);
