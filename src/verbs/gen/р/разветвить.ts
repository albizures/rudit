import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разветвить: PerfectVerb = {
  name: Word('разветвить', 7),
  singular1stPerson: Word('разветвлю', 8),
  singular2ndPerson: Word('разветвишь', 7),
  singular3rdPerson: Word('разветвит', 7),
  plural1stPerson: Word('разветвим', 7),
  plural2ndPerson: Word('разветвите', 7),
  plural3rdPerson: Word('разветвят', 7),
  masculinePast: Word('разветвил', 7),
  femininePast: Word('разветвила', 7),
  neuterPast: Word('разветвило', 7),
  pluralPast: Word('разветвили', 7),
  imperativeInformal: Word('разветви', 7),
  imperativeFormal: Word('разветвите', 7),
  imperfect: [],
};

perfectVerbs.set(разветвить.name.text, разветвить);

export { разветвить };