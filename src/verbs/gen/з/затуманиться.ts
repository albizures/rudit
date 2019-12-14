import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затуманиться: PerfectVerb = {
  name: Word('затуманиться', 5),
  singular1stPerson: Word('затуманюсь', 5),
  singular2ndPerson: Word('затуманишься', 5),
  singular3rdPerson: Word('затуманится', 5),
  plural1stPerson: Word('затуманимся', 5),
  plural2ndPerson: Word('затуманитесь', 5),
  plural3rdPerson: Word('затуманятся', 5),
  masculinePast: Word('затуманился', 5),
  femininePast: Word('затуманилась', 5),
  neuterPast: Word('затуманилось', 5),
  pluralPast: Word('затуманились', 5),
  imperativeInformal: Word('затуманься', 5),
  imperativeFormal: Word('затуманьтесь', 5),
  imperfect: [],
};

perfectVerbs.set(затуманиться.name.text, затуманиться);

export { затуманиться };