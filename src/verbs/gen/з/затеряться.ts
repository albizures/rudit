import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затеряться: PerfectVerb = {
  name: Word('затеряться', 5),
  singular1stPerson: Word('затеряюсь', 5),
  singular2ndPerson: Word('затеряешься', 5),
  singular3rdPerson: Word('затеряется', 5),
  plural1stPerson: Word('затеряемся', 5),
  plural2ndPerson: Word('затеряетесь', 5),
  plural3rdPerson: Word('затеряются', 5),
  masculinePast: Word('затерялся', 5),
  femininePast: Word('затерялась', 5),
  neuterPast: Word('затерялось', 5),
  pluralPast: Word('затерялись', 5),
  imperativeInformal: Word('затеряйся', 5),
  imperativeFormal: Word('затеряйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(затеряться.name.text, затеряться);

export { затеряться };