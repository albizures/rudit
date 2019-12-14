import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const искоренить: PerfectVerb = {
  name: Word('искоренить', 7),
  singular1stPerson: Word('искореню', 7),
  singular2ndPerson: Word('искоренишь', 7),
  singular3rdPerson: Word('искоренит', 7),
  plural1stPerson: Word('искореним', 7),
  plural2ndPerson: Word('искорените', 7),
  plural3rdPerson: Word('искоренят', 7),
  masculinePast: Word('искоренил', 7),
  femininePast: Word('искоренила', 7),
  neuterPast: Word('искоренило', 7),
  pluralPast: Word('искоренили', 7),
  imperativeInformal: Word('искорени', 7),
  imperativeFormal: Word('искорените', 7),
  imperfect: ['искоренять'],
};

perfectVerbs.set(искоренить.name.text, искоренить);

export { искоренить };