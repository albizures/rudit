import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const передарить: PerfectVerb = {
  name: Word('передарить', 7),
  singular1stPerson: Word('передарю', 7),
  singular2ndPerson: Word('передаришь', 5),
  singular3rdPerson: Word('передарит', 5),
  plural1stPerson: Word('передарим', 5),
  plural2ndPerson: Word('передарите', 5),
  plural3rdPerson: Word('передарят', 5),
  masculinePast: Word('передарил', 7),
  femininePast: Word('передарила', 7),
  neuterPast: Word('передарило', 7),
  pluralPast: Word('передарили', 7),
  imperativeInformal: Word('передари', 7),
  imperativeFormal: Word('передарите', 7),
  imperfect: [],
};

perfectVerbs.set(передарить.name.text, передарить);

export { передарить };