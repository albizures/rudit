import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const истерзать: PerfectVerb = {
  name: Word('истерзать', 6),
  singular1stPerson: Word('истерзаю', 6),
  singular2ndPerson: Word('истерзаешь', 6),
  singular3rdPerson: Word('истерзает', 6),
  plural1stPerson: Word('истерзаем', 6),
  plural2ndPerson: Word('истерзаете', 6),
  plural3rdPerson: Word('истерзают', 6),
  masculinePast: Word('истерзал', 6),
  femininePast: Word('истерзала', 6),
  neuterPast: Word('истерзало', 6),
  pluralPast: Word('истерзали', 6),
  imperativeInformal: Word('истерзай', 6),
  imperativeFormal: Word('истерзайте', 6),
  imperfect: [],
};

perfectVerbs.set(истерзать.name.text, истерзать);

export { истерзать };