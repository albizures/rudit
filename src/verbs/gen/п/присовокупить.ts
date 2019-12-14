import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const присовокупить: PerfectVerb = {
  name: Word('присовокупить', 10),
  singular1stPerson: Word('присовокуплю', 11),
  singular2ndPerson: Word('присовокупишь', 10),
  singular3rdPerson: Word('присовокупит', 10),
  plural1stPerson: Word('присовокупим', 10),
  plural2ndPerson: Word('присовокупите', 10),
  plural3rdPerson: Word('присовокупят', 10),
  masculinePast: Word('присовокупил', 10),
  femininePast: Word('присовокупила', 10),
  neuterPast: Word('присовокупило', 10),
  pluralPast: Word('присовокупили', 10),
  imperativeInformal: Word('присовокупи', 10),
  imperativeFormal: Word('присовокупите', 10),
  imperfect: [],
};

perfectVerbs.set(присовокупить.name.text, присовокупить);

export { присовокупить };