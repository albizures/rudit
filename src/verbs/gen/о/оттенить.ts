import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оттенить: PerfectVerb = {
  name: Word('оттенить', 5),
  singular1stPerson: Word('оттеню', 5),
  singular2ndPerson: Word('оттенишь', 5),
  singular3rdPerson: Word('оттенит', 5),
  plural1stPerson: Word('оттеним', 5),
  plural2ndPerson: Word('оттените', 5),
  plural3rdPerson: Word('оттенят', 5),
  masculinePast: Word('оттенил', 5),
  femininePast: Word('оттенила', 5),
  neuterPast: Word('оттенило', 5),
  pluralPast: Word('оттенили', 5),
  imperativeInformal: Word('оттени', 5),
  imperativeFormal: Word('оттените', 5),
  imperfect: [],
};

perfectVerbs.set(оттенить.name.text, оттенить);

export { оттенить };