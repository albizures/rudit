import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const усовершенствоваться: PerfectVerb = {
  name: Word('усовершенствоваться', 7),
  singular1stPerson: Word('усовершенствуюсь', 7),
  singular2ndPerson: Word('усовершенствуешься', 7),
  singular3rdPerson: Word('усовершенствуется', 7),
  plural1stPerson: Word('усовершенствуемся', 7),
  plural2ndPerson: Word('усовершенствуетесь', 7),
  plural3rdPerson: Word('усовершенствуются', 7),
  masculinePast: Word('усовершенствовался', 7),
  femininePast: Word('усовершенствовалась', 7),
  neuterPast: Word('усовершенствовалось', 7),
  pluralPast: Word('усовершенствовались', 7),
  imperativeInformal: Word('усовершенствуйся', 7),
  imperativeFormal: Word('усовершенствуйтесь', 7),
  imperfect: ['совершенствоваться'],
};

perfectVerbs.set(усовершенствоваться.name.text, усовершенствоваться);

export { усовершенствоваться };