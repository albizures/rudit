import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дробить: PerfectVerb = {
  name: Word('дробить', 4),
  singular1stPerson: Word('дроблю', 5),
  singular2ndPerson: Word('дробишь', 4),
  singular3rdPerson: Word('дробит', 4),
  plural1stPerson: Word('дробим', 4),
  plural2ndPerson: Word('дробите', 4),
  plural3rdPerson: Word('дробят', 4),
  masculinePast: Word('дробил', 4),
  femininePast: Word('дробила', 4),
  neuterPast: Word('дробило', 4),
  pluralPast: Word('дробили', 4),
  imperativeInformal: Word('дроби', 4),
  imperativeFormal: Word('дробите', 4),
  imperfect: [],
};

perfectVerbs.set(дробить.name.text, дробить);

export { дробить };