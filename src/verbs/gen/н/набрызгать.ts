import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const набрызгать: PerfectVerb = {
  name: Word('набрызгать', 4),
  singular1stPerson: Word('набрызгаю', 4),
  singular2ndPerson: Word('набрызгаешь', 4),
  singular3rdPerson: Word('набрызгает', 4),
  plural1stPerson: Word('набрызгаем', 4),
  plural2ndPerson: Word('набрызгаете', 4),
  plural3rdPerson: Word('набрызгают', 4),
  masculinePast: Word('набрызгал', 4),
  femininePast: Word('набрызгала', 4),
  neuterPast: Word('набрызгало', 4),
  pluralPast: Word('набрызгали', 4),
  imperativeInformal: Word('набрызгай', 4),
  imperativeFormal: Word('набрызгайте', 4),
  imperfect: [],
};

perfectVerbs.set(набрызгать.name.text, набрызгать);

export { набрызгать };