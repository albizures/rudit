import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const построгать: PerfectVerb = {
  name: Word('построгать', 7),
  singular1stPerson: Word('построгаю', 7),
  singular2ndPerson: Word('построгаешь', 7),
  singular3rdPerson: Word('построгает', 7),
  plural1stPerson: Word('построгаем', 7),
  plural2ndPerson: Word('построгаете', 7),
  plural3rdPerson: Word('построгают', 7),
  masculinePast: Word('построгал', 7),
  femininePast: Word('построгала', 7),
  neuterPast: Word('построгало', 7),
  pluralPast: Word('построгали', 7),
  imperativeInformal: Word('построгай', 7),
  imperativeFormal: Word('построгайте', 7),
  imperfect: [],
};

perfectVerbs.set(построгать.name.text, построгать);

export { построгать };