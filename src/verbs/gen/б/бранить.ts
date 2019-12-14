import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бранить: PerfectVerb = {
  name: Word('бранить', 4),
  singular1stPerson: Word('браню', 4),
  singular2ndPerson: Word('бранишь', 4),
  singular3rdPerson: Word('бранит', 4),
  plural1stPerson: Word('браним', 4),
  plural2ndPerson: Word('браните', 4),
  plural3rdPerson: Word('бранят', 4),
  masculinePast: Word('бранил', 4),
  femininePast: Word('бранила', 4),
  neuterPast: Word('бранило', 4),
  pluralPast: Word('бранили', 4),
  imperativeInformal: Word('брани', 4),
  imperativeFormal: Word('браните', 4),
  imperfect: [],
};

perfectVerbs.set(бранить.name.text, бранить);

export { бранить };