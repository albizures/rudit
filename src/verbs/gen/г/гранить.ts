import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гранить: PerfectVerb = {
  name: Word('гранить', 4),
  singular1stPerson: Word('граню', 4),
  singular2ndPerson: Word('гранишь', 4),
  singular3rdPerson: Word('гранит', 4),
  plural1stPerson: Word('граним', 4),
  plural2ndPerson: Word('граните', 4),
  plural3rdPerson: Word('гранят', 4),
  masculinePast: Word('гранил', 4),
  femininePast: Word('гранила', 4),
  neuterPast: Word('гранило', 4),
  pluralPast: Word('гранили', 4),
  imperativeInformal: Word('грани', 4),
  imperativeFormal: Word('граните', 4),
  imperfect: [],
};

perfectVerbs.set(гранить.name.text, гранить);

export { гранить };