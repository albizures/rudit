import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наступить: PerfectVerb = {
  name: Word('наступить', 6),
  singular1stPerson: Word('наступлю', 7),
  singular2ndPerson: Word('наступишь', 4),
  singular3rdPerson: Word('наступит', 4),
  plural1stPerson: Word('наступим', 4),
  plural2ndPerson: Word('наступите', 4),
  plural3rdPerson: Word('наступят', 4),
  masculinePast: Word('наступил', 6),
  femininePast: Word('наступила', 6),
  neuterPast: Word('наступило', 6),
  pluralPast: Word('наступили', 6),
  imperativeInformal: Word('наступи', 6),
  imperativeFormal: Word('наступите', 6),
  imperfect: ['наступать'],
};

perfectVerbs.set(наступить.name.text, наступить);

export { наступить };