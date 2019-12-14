import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const забояться: PerfectVerb = {
  name: Word('забояться', 4),
  singular1stPerson: Word('забоюсь', 4),
  singular2ndPerson: Word('забоишься', 4),
  singular3rdPerson: Word('забоится', 4),
  plural1stPerson: Word('забоимся', 4),
  plural2ndPerson: Word('забоитесь', 4),
  plural3rdPerson: Word('забоятся', 4),
  masculinePast: Word('забоялся', 4),
  femininePast: Word('забоялась', 4),
  neuterPast: Word('забоялось', 4),
  pluralPast: Word('забоялись', 4),
  imperativeInformal: Word('забойся', 3),
  imperativeFormal: Word('забойтесь', 3),
  imperfect: ['бояться'],
};

perfectVerbs.set(забояться.name.text, забояться);

export { забояться };