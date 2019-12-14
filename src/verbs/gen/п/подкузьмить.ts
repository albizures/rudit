import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подкузьмить: PerfectVerb = {
  name: Word('подкузьмить', 8),
  singular1stPerson: Word('подкузьмлю', 9),
  singular2ndPerson: Word('подкузьмишь', 8),
  singular3rdPerson: Word('подкузьмит', 8),
  plural1stPerson: Word('подкузьмим', 8),
  plural2ndPerson: Word('подкузьмите', 8),
  plural3rdPerson: Word('подкузьмят', 8),
  masculinePast: Word('подкузьмил', 8),
  femininePast: Word('подкузьмила', 8),
  neuterPast: Word('подкузьмило', 8),
  pluralPast: Word('подкузьмили', 8),
  imperativeInformal: Word('подкузьми', 8),
  imperativeFormal: Word('подкузьмите', 8),
  imperfect: [],
};

perfectVerbs.set(подкузьмить.name.text, подкузьмить);

export { подкузьмить };