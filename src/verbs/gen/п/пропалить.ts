import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пропалить: PerfectVerb = {
  name: Word('пропалить', 6),
  singular1stPerson: Word('пропалю', 6),
  singular2ndPerson: Word('пропалишь', 6),
  singular3rdPerson: Word('пропалит', 6),
  plural1stPerson: Word('пропалим', 6),
  plural2ndPerson: Word('пропалите', 6),
  plural3rdPerson: Word('пропалят', 6),
  masculinePast: Word('пропалил', 6),
  femininePast: Word('пропалила', 6),
  neuterPast: Word('пропалило', 6),
  pluralPast: Word('пропалили', 6),
  imperativeInformal: Word('пропали', 6),
  imperativeFormal: Word('пропалите', 6),
  imperfect: [],
};

perfectVerbs.set(пропалить.name.text, пропалить);

export { пропалить };