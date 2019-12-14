import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уязвить: PerfectVerb = {
  name: Word('уязвить', 4),
  singular1stPerson: Word('уязвлю', 5),
  singular2ndPerson: Word('уязвишь', 4),
  singular3rdPerson: Word('уязвит', 4),
  plural1stPerson: Word('уязвим', 4),
  plural2ndPerson: Word('уязвите', 4),
  plural3rdPerson: Word('уязвят', 4),
  masculinePast: Word('уязвил', 4),
  femininePast: Word('уязвила', 4),
  neuterPast: Word('уязвило', 4),
  pluralPast: Word('уязвили', 4),
  imperativeInformal: Word('уязви', 4),
  imperativeFormal: Word('уязвите', 4),
  imperfect: [],
};

perfectVerbs.set(уязвить.name.text, уязвить);

export { уязвить };