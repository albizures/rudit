import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удешевляться: PerfectVerb = {
  name: Word('удешевляться', 7),
  singular1stPerson: Word('удешевляюсь', 7),
  singular2ndPerson: Word('удешевляешься', 7),
  singular3rdPerson: Word('удешевляется', 7),
  plural1stPerson: Word('удешевляемся', 7),
  plural2ndPerson: Word('удешевляетесь', 7),
  plural3rdPerson: Word('удешевляются', 7),
  masculinePast: Word('удешевлялся', 7),
  femininePast: Word('удешевлялась', 7),
  neuterPast: Word('удешевлялось', 7),
  pluralPast: Word('удешевлялись', 7),
  imperativeInformal: Word('удешевляйся', 7),
  imperativeFormal: Word('удешевляйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(удешевляться.name.text, удешевляться);

export { удешевляться };