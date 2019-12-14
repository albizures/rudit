import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const услужить: PerfectVerb = {
  name: Word('услужить', 5),
  singular1stPerson: Word('услужу', 5),
  singular2ndPerson: Word('услужишь', 3),
  singular3rdPerson: Word('услужит', 3),
  plural1stPerson: Word('услужим', 3),
  plural2ndPerson: Word('услужите', 3),
  plural3rdPerson: Word('услужат', 3),
  masculinePast: Word('услужил', 5),
  femininePast: Word('услужила', 5),
  neuterPast: Word('услужило', 5),
  pluralPast: Word('услужили', 5),
  imperativeInformal: Word('услужи', 5),
  imperativeFormal: Word('услужите', 5),
  imperfect: [],
};

perfectVerbs.set(услужить.name.text, услужить);

export { услужить };