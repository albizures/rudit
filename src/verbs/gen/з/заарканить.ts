import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заарканить: PerfectVerb = {
  name: Word('заарканить', 5),
  singular1stPerson: Word('заарканю', 5),
  singular2ndPerson: Word('заарканишь', 5),
  singular3rdPerson: Word('заарканит', 5),
  plural1stPerson: Word('заарканим', 5),
  plural2ndPerson: Word('заарканите', 5),
  plural3rdPerson: Word('заарканят', 5),
  masculinePast: Word('заарканил', 5),
  femininePast: Word('заарканила', 5),
  neuterPast: Word('заарканило', 5),
  pluralPast: Word('заарканили', 5),
  imperativeInformal: Word('зааркань', 5),
  imperativeFormal: Word('заарканьте', 5),
  imperfect: [],
};

perfectVerbs.set(заарканить.name.text, заарканить);

export { заарканить };