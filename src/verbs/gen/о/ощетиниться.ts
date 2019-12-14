import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ощетиниться: PerfectVerb = {
  name: Word('ощетиниться', 4),
  singular1stPerson: Word('ощетинюсь', 4),
  singular2ndPerson: Word('ощетинишься', 4),
  singular3rdPerson: Word('ощетинится', 4),
  plural1stPerson: Word('ощетинимся', 4),
  plural2ndPerson: Word('ощетинитесь', 4),
  plural3rdPerson: Word('ощетинятся', 4),
  masculinePast: Word('ощетинился', 4),
  femininePast: Word('ощетинилась', 4),
  neuterPast: Word('ощетинилось', 4),
  pluralPast: Word('ощетинились', 4),
  imperativeInformal: Word('ощетинься', 4),
  imperativeFormal: Word('ощетиньтесь', 4),
  imperfect: [],
};

perfectVerbs.set(ощетиниться.name.text, ощетиниться);

export { ощетиниться };