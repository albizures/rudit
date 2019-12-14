import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стариться: PerfectVerb = {
  name: Word('стариться', 2),
  singular1stPerson: Word('старюсь', 2),
  singular2ndPerson: Word('старишься', 2),
  singular3rdPerson: Word('старится', 2),
  plural1stPerson: Word('старимся', 2),
  plural2ndPerson: Word('старитесь', 2),
  plural3rdPerson: Word('старятся', 2),
  masculinePast: Word('старился', 2),
  femininePast: Word('старилась', 2),
  neuterPast: Word('старилось', 2),
  pluralPast: Word('старились', 2),
  imperativeInformal: Word('старься', 2),
  imperativeFormal: Word('старьтесь', 2),
  imperfect: ['состариться'],
};

perfectVerbs.set(стариться.name.text, стариться);

export { стариться };