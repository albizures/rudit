import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мыслить: PerfectVerb = {
  name: Word('мыслить', 1),
  singular1stPerson: Word('мыслю', 1),
  singular2ndPerson: Word('мыслишь', 1),
  singular3rdPerson: Word('мыслит', 1),
  plural1stPerson: Word('мыслим', 1),
  plural2ndPerson: Word('мыслите', 1),
  plural3rdPerson: Word('мыслят', 1),
  masculinePast: Word('мыслил', 1),
  femininePast: Word('мыслила', 1),
  neuterPast: Word('мыслило', 1),
  pluralPast: Word('мыслили', 1),
  imperativeInformal: Word('мысли', 1),
  imperativeFormal: Word('мыслите', 1),
  imperfect: [],
};

perfectVerbs.set(мыслить.name.text, мыслить);

export { мыслить };