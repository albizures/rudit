import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посоветоваться: PerfectVerb = {
  name: Word('посоветоваться', 5),
  singular1stPerson: Word('посоветуюсь', 5),
  singular2ndPerson: Word('посоветуешься', 5),
  singular3rdPerson: Word('посоветуется', 5),
  plural1stPerson: Word('посоветуемся', 5),
  plural2ndPerson: Word('посоветуетесь', 5),
  plural3rdPerson: Word('посоветуются', 5),
  masculinePast: Word('посоветовался', 5),
  femininePast: Word('посоветовалась', 5),
  neuterPast: Word('посоветовалось', 5),
  pluralPast: Word('посоветовались', 5),
  imperativeInformal: Word('посоветуйся', 5),
  imperativeFormal: Word('посоветуйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(посоветоваться.name.text, посоветоваться);

export { посоветоваться };