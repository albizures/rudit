import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размочить: PerfectVerb = {
  name: Word('размочить', 6),
  singular1stPerson: Word('размочу', 6),
  singular2ndPerson: Word('размочишь', 4),
  singular3rdPerson: Word('размочит', 4),
  plural1stPerson: Word('размочим', 4),
  plural2ndPerson: Word('размочите', 4),
  plural3rdPerson: Word('размочат', 4),
  masculinePast: Word('размочил', 6),
  femininePast: Word('размочила', 6),
  neuterPast: Word('размочило', 6),
  pluralPast: Word('размочили', 6),
  imperativeInformal: Word('размочи', 6),
  imperativeFormal: Word('размочите', 6),
  imperfect: [],
};

perfectVerbs.set(размочить.name.text, размочить);

export { размочить };