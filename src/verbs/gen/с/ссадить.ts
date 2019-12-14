import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ссадить: PerfectVerb = {
  name: Word('ссадить', 4),
  singular1stPerson: Word('ссажу', 4),
  singular2ndPerson: Word('ссадишь', 2),
  singular3rdPerson: Word('ссадит', 2),
  plural1stPerson: Word('ссадим', 2),
  plural2ndPerson: Word('ссадите', 2),
  plural3rdPerson: Word('ссадят', 2),
  masculinePast: Word('ссадил', 4),
  femininePast: Word('ссадила', 4),
  neuterPast: Word('ссадило', 4),
  pluralPast: Word('ссадили', 4),
  imperativeInformal: Word('ссади', 4),
  imperativeFormal: Word('ссадите', 4),
  imperfect: [],
};

perfectVerbs.set(ссадить.name.text, ссадить);

export { ссадить };