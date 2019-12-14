import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воспалить: PerfectVerb = {
  name: Word('воспалить', 6),
  singular1stPerson: Word('воспалю', 6),
  singular2ndPerson: Word('воспалишь', 6),
  singular3rdPerson: Word('воспалит', 6),
  plural1stPerson: Word('воспалим', 6),
  plural2ndPerson: Word('воспалите', 6),
  plural3rdPerson: Word('воспалят', 6),
  masculinePast: Word('воспалил', 6),
  femininePast: Word('воспалила', 6),
  neuterPast: Word('воспалило', 6),
  pluralPast: Word('воспалили', 6),
  imperativeInformal: Word('воспали', 6),
  imperativeFormal: Word('воспалите', 6),
  imperfect: [],
};

perfectVerbs.set(воспалить.name.text, воспалить);

export { воспалить };