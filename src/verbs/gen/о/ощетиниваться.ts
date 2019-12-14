import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ощетиниваться: PerfectVerb = {
  name: Word('ощетиниваться', 4),
  singular1stPerson: Word('ощетиниваюсь', 4),
  singular2ndPerson: Word('ощетиниваешься', 4),
  singular3rdPerson: Word('ощетинивается', 4),
  plural1stPerson: Word('ощетиниваемся', 4),
  plural2ndPerson: Word('ощетиниваетесь', 4),
  plural3rdPerson: Word('ощетиниваются', 4),
  masculinePast: Word('ощетинивался', 4),
  femininePast: Word('ощетинивалась', 4),
  neuterPast: Word('ощетинивалось', 4),
  pluralPast: Word('ощетинивались', 4),
  imperativeInformal: Word('ощетинивайся', 4),
  imperativeFormal: Word('ощетинивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(ощетиниваться.name.text, ощетиниваться);

export { ощетиниваться };