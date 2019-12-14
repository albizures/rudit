import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const треножить: PerfectVerb = {
  name: Word('треножить', 4),
  singular1stPerson: Word('треножу', 4),
  singular2ndPerson: Word('треножишь', 4),
  singular3rdPerson: Word('треножит', 4),
  plural1stPerson: Word('треножим', 4),
  plural2ndPerson: Word('треножите', 4),
  plural3rdPerson: Word('треножат', 4),
  masculinePast: Word('треножил', 4),
  femininePast: Word('треножила', 4),
  neuterPast: Word('треножило', 4),
  pluralPast: Word('треножили', 4),
  imperativeInformal: Word('треножь', 4),
  imperativeFormal: Word('треножьте', 4),
  imperfect: [],
};

perfectVerbs.set(треножить.name.text, треножить);

export { треножить };