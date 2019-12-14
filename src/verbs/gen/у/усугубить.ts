import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const усугубить: PerfectVerb = {
  name: Word('усугубить', 6),
  singular1stPerson: Word('усугублю', 7),
  singular2ndPerson: Word('усугубишь', 6),
  singular3rdPerson: Word('усугубит', 6),
  plural1stPerson: Word('усугубим', 6),
  plural2ndPerson: Word('усугубите', 6),
  plural3rdPerson: Word('усугубят', 6),
  masculinePast: Word('усугубил', 6),
  femininePast: Word('усугубила', 6),
  neuterPast: Word('усугубило', 6),
  pluralPast: Word('усугубили', 6),
  imperativeInformal: Word('усугуби', 6),
  imperativeFormal: Word('усугубите', 6),
  imperfect: ['усугублять'],
};

perfectVerbs.set(усугубить.name.text, усугубить);

export { усугубить };