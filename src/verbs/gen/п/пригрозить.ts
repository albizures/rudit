import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пригрозить: PerfectVerb = {
  name: Word('пригрозить', 7),
  singular1stPerson: Word('пригрожу', 7),
  singular2ndPerson: Word('пригрозишь', 7),
  singular3rdPerson: Word('пригрозит', 7),
  plural1stPerson: Word('пригрозим', 7),
  plural2ndPerson: Word('пригрозите', 7),
  plural3rdPerson: Word('пригрозят', 7),
  masculinePast: Word('пригрозил', 7),
  femininePast: Word('пригрозила', 7),
  neuterPast: Word('пригрозило', 7),
  pluralPast: Word('пригрозили', 7),
  imperativeInformal: Word('пригрози', 7),
  imperativeFormal: Word('пригрозите', 7),
  imperfect: [],
};

perfectVerbs.set(пригрозить.name.text, пригрозить);

export { пригрозить };