import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const протащить: PerfectVerb = {
  name: Word('протащить', 6),
  singular1stPerson: Word('протащу', 6),
  singular2ndPerson: Word('протащишь', 4),
  singular3rdPerson: Word('протащит', 4),
  plural1stPerson: Word('протащим', 4),
  plural2ndPerson: Word('протащите', 4),
  plural3rdPerson: Word('протащат', 4),
  masculinePast: Word('протащил', 6),
  femininePast: Word('протащила', 6),
  neuterPast: Word('протащило', 6),
  pluralPast: Word('протащили', 6),
  imperativeInformal: Word('протащи', 6),
  imperativeFormal: Word('протащите', 6),
  imperfect: [],
};

perfectVerbs.set(протащить.name.text, протащить);

export { протащить };