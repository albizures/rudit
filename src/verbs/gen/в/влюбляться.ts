import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const влюбляться: PerfectVerb = {
  name: Word('влюбляться', 5),
  singular1stPerson: Word('влюбляюсь', 5),
  singular2ndPerson: Word('влюбляешься', 5),
  singular3rdPerson: Word('влюбляется', 5),
  plural1stPerson: Word('влюбляемся', 5),
  plural2ndPerson: Word('влюбляетесь', 5),
  plural3rdPerson: Word('влюбляются', 5),
  masculinePast: Word('влюблялся', 5),
  femininePast: Word('влюблялась', 5),
  neuterPast: Word('влюблялось', 5),
  pluralPast: Word('влюблялись', 5),
  imperativeInformal: Word('влюбляйся', 5),
  imperativeFormal: Word('влюбляйтесь', 5),
  imperfect: ['влюбиться'],
};

perfectVerbs.set(влюбляться.name.text, влюбляться);

export { влюбляться };