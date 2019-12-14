import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const характеризоваться: PerfectVerb = {
  name: Word('характеризоваться', 12),
  singular1stPerson: Word('характеризуюсь', 10),
  singular2ndPerson: Word('характеризуешься', 10),
  singular3rdPerson: Word('характеризуется', 10),
  plural1stPerson: Word('характеризуемся', 10),
  plural2ndPerson: Word('характеризуетесь', 10),
  plural3rdPerson: Word('характеризуются', 10),
  masculinePast: Word('характеризовался', 12),
  femininePast: Word('характеризовалась', 12),
  neuterPast: Word('характеризовалось', 12),
  pluralPast: Word('характеризовались', 12),
  imperativeInformal: Word('характеризуйся', 10),
  imperativeFormal: Word('характеризуйтесь', 10),
  imperfect: [],
};

perfectVerbs.set(характеризоваться.name.text, характеризоваться);

export { характеризоваться };