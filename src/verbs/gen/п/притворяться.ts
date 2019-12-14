import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const притворяться: PerfectVerb = {
  name: Word('притворяться', 7),
  singular1stPerson: Word('притворяюсь', 7),
  singular2ndPerson: Word('притворяешься', 7),
  singular3rdPerson: Word('притворяется', 7),
  plural1stPerson: Word('притворяемся', 7),
  plural2ndPerson: Word('притворяетесь', 7),
  plural3rdPerson: Word('притворяются', 7),
  masculinePast: Word('притворялся', 7),
  femininePast: Word('притворялась', 7),
  neuterPast: Word('притворялось', 7),
  pluralPast: Word('притворялись', 7),
  imperativeInformal: Word('притворяйся', 7),
  imperativeFormal: Word('притворяйтесь', 7),
  imperfect: ['притвориться'],
};

perfectVerbs.set(притворяться.name.text, притворяться);

export { притворяться };