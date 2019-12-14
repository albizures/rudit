import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const промерзать: PerfectVerb = {
  name: Word('промерзать', 7),
  singular1stPerson: Word('промерзаю', 7),
  singular2ndPerson: Word('промерзаешь', 7),
  singular3rdPerson: Word('промерзает', 7),
  plural1stPerson: Word('промерзаем', 7),
  plural2ndPerson: Word('промерзаете', 7),
  plural3rdPerson: Word('промерзают', 7),
  masculinePast: Word('промерзал', 7),
  femininePast: Word('промерзала', 7),
  neuterPast: Word('промерзало', 7),
  pluralPast: Word('промерзали', 7),
  imperativeInformal: Word('промерзай', 7),
  imperativeFormal: Word('промерзайте', 7),
  imperfect: [],
};

perfectVerbs.set(промерзать.name.text, промерзать);

export { промерзать };