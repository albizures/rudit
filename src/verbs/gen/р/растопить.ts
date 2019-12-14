import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растопить: PerfectVerb = {
  name: Word('растопить', 6),
  singular1stPerson: Word('растоплю', 7),
  singular2ndPerson: Word('растопишь', 4),
  singular3rdPerson: Word('растопит', 4),
  plural1stPerson: Word('растопим', 4),
  plural2ndPerson: Word('растопите', 4),
  plural3rdPerson: Word('растопят', 4),
  masculinePast: Word('растопил', 6),
  femininePast: Word('растопила', 6),
  neuterPast: Word('растопило', 6),
  pluralPast: Word('растопили', 6),
  imperativeInformal: Word('растопи', 6),
  imperativeFormal: Word('растопите', 6),
  imperfect: [],
};

perfectVerbs.set(растопить.name.text, растопить);

export { растопить };