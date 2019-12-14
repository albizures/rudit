import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поразмыслить: PerfectVerb = {
  name: Word('поразмыслить', 6),
  singular1stPerson: Word('поразмыслю', 6),
  singular2ndPerson: Word('поразмыслишь', 6),
  singular3rdPerson: Word('поразмыслит', 6),
  plural1stPerson: Word('поразмыслим', 6),
  plural2ndPerson: Word('поразмыслите', 6),
  plural3rdPerson: Word('поразмыслят', 6),
  masculinePast: Word('поразмыслил', 6),
  femininePast: Word('поразмыслила', 6),
  neuterPast: Word('поразмыслило', 6),
  pluralPast: Word('поразмыслили', 6),
  imperativeInformal: Word('поразмысли', 6),
  imperativeFormal: Word('поразмыслите', 6),
  imperfect: [],
};

perfectVerbs.set(поразмыслить.name.text, поразмыслить);

export { поразмыслить };