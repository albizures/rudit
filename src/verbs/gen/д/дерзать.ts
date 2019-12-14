import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дерзать: PerfectVerb = {
  name: Word('дерзать', 4),
  singular1stPerson: Word('дерзаю', 4),
  singular2ndPerson: Word('дерзаешь', 4),
  singular3rdPerson: Word('дерзает', 4),
  plural1stPerson: Word('дерзаем', 4),
  plural2ndPerson: Word('дерзаете', 4),
  plural3rdPerson: Word('дерзают', 4),
  masculinePast: Word('дерзал', 4),
  femininePast: Word('дерзала', 4),
  neuterPast: Word('дерзало', 4),
  pluralPast: Word('дерзали', 4),
  imperativeInformal: Word('дерзай', 4),
  imperativeFormal: Word('дерзайте', 4),
  imperfect: ['дерзнуть'],
};

perfectVerbs.set(дерзать.name.text, дерзать);

export { дерзать };