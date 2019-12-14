import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уступить: PerfectVerb = {
  name: Word('уступить', 5),
  singular1stPerson: Word('уступлю', 6),
  singular2ndPerson: Word('уступишь', 3),
  singular3rdPerson: Word('уступит', 3),
  plural1stPerson: Word('уступим', 3),
  plural2ndPerson: Word('уступите', 3),
  plural3rdPerson: Word('уступят', 3),
  masculinePast: Word('уступил', 5),
  femininePast: Word('уступила', 5),
  neuterPast: Word('уступило', 5),
  pluralPast: Word('уступили', 5),
  imperativeInformal: Word('уступи', 5),
  imperativeFormal: Word('уступите', 5),
  imperfect: ['уступать'],
};

perfectVerbs.set(уступить.name.text, уступить);

export { уступить };