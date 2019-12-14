import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пробиваться: PerfectVerb = {
  name: Word('пробиваться', 6),
  singular1stPerson: Word('пробиваюсь', 6),
  singular2ndPerson: Word('пробиваешься', 6),
  singular3rdPerson: Word('пробивается', 6),
  plural1stPerson: Word('пробиваемся', 6),
  plural2ndPerson: Word('пробиваетесь', 6),
  plural3rdPerson: Word('пробиваются', 6),
  masculinePast: Word('пробивался', 6),
  femininePast: Word('пробивалась', 6),
  neuterPast: Word('пробивалось', 6),
  pluralPast: Word('пробивались', 6),
  imperativeInformal: Word('пробивайся', 6),
  imperativeFormal: Word('пробивайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(пробиваться.name.text, пробиваться);

export { пробиваться };