import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пробираться: PerfectVerb = {
  name: Word('пробираться', 6),
  singular1stPerson: Word('пробираюсь', 6),
  singular2ndPerson: Word('пробираешься', 6),
  singular3rdPerson: Word('пробирается', 6),
  plural1stPerson: Word('пробираемся', 6),
  plural2ndPerson: Word('пробираетесь', 6),
  plural3rdPerson: Word('пробираются', 6),
  masculinePast: Word('пробирался', 6),
  femininePast: Word('пробиралась', 6),
  neuterPast: Word('пробиралось', 6),
  pluralPast: Word('пробирались', 6),
  imperativeInformal: Word('пробирайся', 6),
  imperativeFormal: Word('пробирайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(пробираться.name.text, пробираться);

export { пробираться };