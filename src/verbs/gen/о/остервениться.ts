import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const остервениться: PerfectVerb = {
  name: Word('остервениться', 8),
  singular1stPerson: Word('остервенюсь', 8),
  singular2ndPerson: Word('остервенишься', 8),
  singular3rdPerson: Word('остервенится', 8),
  plural1stPerson: Word('остервенимся', 8),
  plural2ndPerson: Word('остервенитесь', 8),
  plural3rdPerson: Word('остервенятся', 8),
  masculinePast: Word('остервенился', 8),
  femininePast: Word('остервенилась', 8),
  neuterPast: Word('остервенилось', 8),
  pluralPast: Word('остервенились', 8),
  imperativeInformal: Word('остервенись', 8),
  imperativeFormal: Word('остервенитесь', 8),
  imperfect: [],
};

perfectVerbs.set(остервениться.name.text, остервениться);

export { остервениться };