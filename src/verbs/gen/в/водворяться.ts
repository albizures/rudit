import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const водворяться: PerfectVerb = {
  name: Word('водворяться', 6),
  singular1stPerson: Word('водворяюсь', 6),
  singular2ndPerson: Word('водворяешься', 6),
  singular3rdPerson: Word('водворяется', 6),
  plural1stPerson: Word('водворяемся', 6),
  plural2ndPerson: Word('водворяетесь', 6),
  plural3rdPerson: Word('водворяются', 6),
  masculinePast: Word('водворялся', 6),
  femininePast: Word('водворялась', 6),
  neuterPast: Word('водворялось', 6),
  pluralPast: Word('водворялись', 6),
  imperativeInformal: Word('водворяйся', 6),
  imperativeFormal: Word('водворяйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(водворяться.name.text, водворяться);

export { водворяться };