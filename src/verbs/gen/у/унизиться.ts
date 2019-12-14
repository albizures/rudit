import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const унизиться: PerfectVerb = {
  name: Word('унизиться', 2),
  singular1stPerson: Word('унижусь', 2),
  singular2ndPerson: Word('унизишься', 2),
  singular3rdPerson: Word('унизится', 2),
  plural1stPerson: Word('унизимся', 2),
  plural2ndPerson: Word('унизитесь', 2),
  plural3rdPerson: Word('унизятся', 2),
  masculinePast: Word('унизился', 2),
  femininePast: Word('унизилась', 2),
  neuterPast: Word('унизилось', 2),
  pluralPast: Word('унизились', 2),
  imperativeInformal: Word('унизься', 2),
  imperativeFormal: Word('унизьтесь', 2),
  imperfect: [],
};

perfectVerbs.set(унизиться.name.text, унизиться);

export { унизиться };