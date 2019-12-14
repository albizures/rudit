import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const грузиться: PerfectVerb = {
  name: Word('грузиться', 4),
  singular1stPerson: Word('гружусь', 4),
  singular2ndPerson: Word('грузишься', 2),
  singular3rdPerson: Word('грузится', 2),
  plural1stPerson: Word('грузимся', 2),
  plural2ndPerson: Word('грузитесь', 2),
  plural3rdPerson: Word('грузятся', 2),
  masculinePast: Word('грузился', 4),
  femininePast: Word('грузилась', 4),
  neuterPast: Word('грузилось', 4),
  pluralPast: Word('грузились', 4),
  imperativeInformal: Word('грузись', 4),
  imperativeFormal: Word('грузитесь', 4),
  imperfect: [],
};

perfectVerbs.set(грузиться.name.text, грузиться);

export { грузиться };