import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приотворяться: PerfectVerb = {
  name: Word('приотворяться', 8),
  singular1stPerson: Word('приотворяюсь', 8),
  singular2ndPerson: Word('приотворяешься', 8),
  singular3rdPerson: Word('приотворяется', 8),
  plural1stPerson: Word('приотворяемся', 8),
  plural2ndPerson: Word('приотворяетесь', 8),
  plural3rdPerson: Word('приотворяются', 8),
  masculinePast: Word('приотворялся', 8),
  femininePast: Word('приотворялась', 8),
  neuterPast: Word('приотворялось', 8),
  pluralPast: Word('приотворялись', 8),
  imperativeInformal: Word('приотворяйся', 8),
  imperativeFormal: Word('приотворяйтесь', 8),
  imperfect: [],
};

perfectVerbs.set(приотворяться.name.text, приотворяться);

export { приотворяться };