import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const угораздить: PerfectVerb = {
  name: Word('угораздить', 4),
  singular1stPerson: Word('угоразжу', 4),
  singular2ndPerson: Word('угораздишь', 4),
  singular3rdPerson: Word('угораздит', 4),
  plural1stPerson: Word('угораздим', 4),
  plural2ndPerson: Word('угораздите', 4),
  plural3rdPerson: Word('угораздят', 4),
  masculinePast: Word('угораздил', 4),
  femininePast: Word('угораздила', 4),
  neuterPast: Word('угораздило', 4),
  pluralPast: Word('угораздили', 4),
  imperativeInformal: Word('угоразди', 4),
  imperativeFormal: Word('угораздите', 4),
  imperfect: [],
};

perfectVerbs.set(угораздить.name.text, угораздить);

export { угораздить };