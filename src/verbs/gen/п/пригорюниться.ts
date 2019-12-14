import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пригорюниться: PerfectVerb = {
  name: Word('пригорюниться', 6),
  singular1stPerson: Word('пригорюнюсь', 6),
  singular2ndPerson: Word('пригорюнишься', 6),
  singular3rdPerson: Word('пригорюнится', 6),
  plural1stPerson: Word('пригорюнимся', 6),
  plural2ndPerson: Word('пригорюнитесь', 6),
  plural3rdPerson: Word('пригорюнятся', 6),
  masculinePast: Word('пригорюнился', 6),
  femininePast: Word('пригорюнилась', 6),
  neuterPast: Word('пригорюнилось', 6),
  pluralPast: Word('пригорюнились', 6),
  imperativeInformal: Word('пригорюнься', 6),
  imperativeFormal: Word('пригорюньтесь', 6),
  imperfect: [],
};

perfectVerbs.set(пригорюниться.name.text, пригорюниться);

export { пригорюниться };